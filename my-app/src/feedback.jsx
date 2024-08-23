import React, { useEffect, useState } from 'react';
import './App.css';

const Feedback = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    
    // Set the script's attributes
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://secure.wufoo.com/scripts/embed/form.js';
    
    // Initialize the form when the script is loaded
    script.onload = () => {
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
          setFormLoaded(true); // Hide progress bar when the form is loaded
        }, 100); // Adding a slight delay
      } catch (e) {
        console.error("Error displaying Wufoo form", e);
      }
    };

    // Append the script to the document body or a specific container
    const container = document.getElementById('wufoo-form-container');
    if (container) {
      container.appendChild(script);
    }

    // Cleanup script when component unmounts
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
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        )}
        {/* This div will be replaced by the form */}
        <div id="wufoo-zwlqokh1idbsq7"></div>
      </div>
    </div>
  );
};

export default Feedback;
