'use client';

import { useState } from 'react';

const paths = [
  { label: 'Scale', title: 'Ship systems that stay fast under pressure.', detail: 'Distributed Go, Python and TypeScript services built for cloud-native, Kubernetes-backed environments.', proof: '15+ services in one fintech program' },
  { label: 'Modernize', title: 'Turn operational drag into measurable progress.', detail: 'Pragmatic modernization of legacy services, workflows and delivery pipelines without losing production stability.', proof: 'Up to 10x performance uplift' },
  { label: 'Lead', title: 'Give teams clarity from architecture to production.', detail: 'Hands-on technical leadership, calm incident response and delivery practices that teams can understand and own.', proof: '13+ years hands-on' },
];

export default function ImpactSwitcher() {
  const [active, setActive] = useState(0);
  const selected = paths[active];

  return <div className="impactSwitcher">
    <div className="impactTabs" role="tablist" aria-label="Ways Cristian can help">
      {paths.map((path, index) => <button key={path.label} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>{path.label}</button>)}
    </div>
    <div className="impactPanel" role="tabpanel" aria-live="polite">
      <div><small>Choose the outcome</small><h2>{selected.title}</h2></div>
      <div><p>{selected.detail}</p><strong>{selected.proof}</strong></div>
    </div>
  </div>;
}
