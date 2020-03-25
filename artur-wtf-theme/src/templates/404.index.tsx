import React from 'react';

const NotFound = () => (
  <div className="not-found">
    <style>{`
        h1 {
            font-family: 'Segoe UI Light';
            font-weight: 300;
            color: #fff;
        }
        html[itemtype='notfound'] body {
            font-family: 'Segoe UI';
            color: #fff;
            background: #008cff;
            margin: 0;
        }
        .not-found main {
            margin: 4% 10%;
        }
        .emotion {
            font-size: 8em;
            margin: 0;
        }
    `}</style>
    <main>
        <header>
            <h1 className="emotion">:(</h1>
        </header>
        <p>It seems that you are looking for something that is not here currently</p>
        <p>Go Back to the <a href="/">Homepage</a></p>
    </main>
  </div>
)

export default NotFound
