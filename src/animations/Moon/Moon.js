import React from 'react';
import { useSpring, animated } from 'react-spring'

import avatar from '../../assets/images/avatar/my-avatar.png';
import './Moon.modules.css'

const Moon = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    return (
        <animated.div
            className="moon-container"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ 
                transform: props.xys.interpolate(trans),
            }}>
            <img
                className="avatar"
                src={avatar}
                alt="avatar"
            />
        </animated.div>
    )
};

export default Moon;