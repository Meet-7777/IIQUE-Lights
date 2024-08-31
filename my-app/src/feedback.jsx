import React, { useEffect, useState } from 'react';
import './App.css';

const Feedback = () => {
  const [formLoaded, setFormLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://secure.wufoo.com/scripts/embed/form.js';
    
    script.onload = () => {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(interval);
            return oldProgress;
          }
          return Math.min(oldProgress + 10, 100); // Increment by 10%
        });
      }, 200); // Update progress every 200ms

      try {
        setTimeout(() => {
          const options = {
            userName: 'iique',
            formHash: 'zwlqokh1idbsq7',
            autoResize: true,
            height: '1593',
            async: true,
            host: 'wufoo.com',
            header: 'show',
            ssl: true
          };
          const wufooForm = new window.WufooForm();
          wufooForm.initialize(options);
          wufooForm.display();
          setFormLoaded(true);
          setProgress(100); // Set progress to 100% when form is loaded
        }, 2000); // Simulating form load delay
      } catch (e) {
        console.error("Error displaying Wufoo form", e);
      }
    };

    const container = document.getElementById('wufoo-form-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="feedback-container">
      <h2>We’re All Ears</h2>
      <p className="feedback-description">We value your feedback and would love to hear from you. Please fill out the form below to share your thoughts or ask any questions.</p>
      <div id="wufoo-form-container" aria-live="polite">
        {!formLoaded && (
          <div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
            
          </div>
            <p>{progress}%</p> {/* Display the loading percentage */}
          </div>
        )}
        {/* This div will be replaced by the form */}
        <div id="wufoo-zwlqokh1idbsq7"></div>
      </div>
    </div>
  );
};

export default Feedback;
