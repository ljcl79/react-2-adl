import React from 'react';
import Card from './Card';

export default function Grilla({ data }) {
    return (
        <div className="row">
            {data.map((t) => (
                <Card producto={t} />
            ))}
        </div>
    )
}
