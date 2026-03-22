import { Suspense, lazy } from 'react';

const LiquidEther = lazy(() => import('./elements/LiquidEther'));

/**
 * Single global LiquidEther instance — position: fixed so it covers
 * the entire viewport behind every section. Solves the WebGL context
 * limit issue that occurred when each section had its own instance.
 */
export default function GlobalLiquidEther() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            <Suspense fallback={null}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={15}
                    cursorSize={70}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={8}
                    iterationsPoisson={8}
                    resolution={0.25}
                    isBounce={false}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </Suspense>
        </div>
    );
}
