import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type DesignId = 'rose' | 'luxe' | 'vogue' | 'aurora';

interface DesignCtx {
  design: DesignId;
  setDesign: (d: DesignId) => void;
}

const DesignContext = createContext<DesignCtx>({
  design: 'rose',
  setDesign: () => {},
});

export const useDesign = () => useContext(DesignContext);

function applyDesign(id: DesignId) {
  if (id === 'rose') {
    document.documentElement.removeAttribute('data-design');
  } else {
    document.documentElement.setAttribute('data-design', id);
  }
}

export const DesignProvider = ({ children }: { children: ReactNode }) => {
  const [design, setDesignState] = useState<DesignId>('rose');

  useEffect(() => {
    const saved = (localStorage.getItem('hadil-design') ?? 'rose') as DesignId;
    setDesignState(saved);
    applyDesign(saved);
  }, []);

  const setDesign = (id: DesignId) => {
    setDesignState(id);
    applyDesign(id);
    localStorage.setItem('hadil-design', id);
  };

  return (
    <DesignContext.Provider value={{ design, setDesign }}>
      {children}
    </DesignContext.Provider>
  );
};
