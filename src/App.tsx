/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
import { mountBeamSolver } from './beamSolverRuntime';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      mountBeamSolver(containerRef.current);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200"
    />
  );
}
