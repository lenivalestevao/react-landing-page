import { useRef, useState, type KeyboardEvent } from 'react';
import { FAQ } from '../data/content';
import { toggleOpen, wrapIndex } from '../lib/faq';
import { Icon } from './Icon';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent, i: number) => {
    const move = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    if (!move) return;
    e.preventDefault();
    buttons.current[wrapIndex(i + move, FAQ.length)]?.focus();
  };

  return (
    <section id="faq" className="section narrow">
      <div className="section-head">
        <h2>Questions, answered</h2>
      </div>
      <div className="faq">
        {FAQ.map((item, i) => (
          <div key={item.q} className="faq-item">
            <h3>
              <button
                type="button"
                ref={(el) => {
                  buttons.current[i] = el;
                }}
                id={`faq-btn-${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen((cur) => toggleOpen(cur, i))}
                onKeyDown={(e) => onKey(e, i)}
              >
                {item.q}
                <span className={`chev ${open === i ? 'open' : ''}`}>
                  <Icon name="chevron" size={18} />
                </span>
              </button>
            </h3>
            <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={open !== i}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
