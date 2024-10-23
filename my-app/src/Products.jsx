import React from 'react';
import './Products.css'; // Make sure to create this CSS file

// Import images
import ledPanel from './Images/ledPanel.jpeg';
import wiresAndCables from './Images/wiresAndCables.jpeg';
import stripLight from './Images/stripLight.jpeg';
import fan from './Images/Fan.jpeg';
import dLinkCable from './Images/d-link-cat6-cable.jpeg';
import rjConnector from './Images/rj-connector.jpeg';
import FloodLight from './Images/floodLights.jpeg'
import StreetLight from './Images/streetLight.jpeg'
import McbBox from './Images/MCB-Box-legrand.jpg'
import Cany from './Images/Cany-Entensions.jpeg'
import Drivers from './Images/LedDrivers.jpeg'
import LEDLightBulb from './Images/LEDlightBulb.jpeg'
import MSandSS from './Images/MS-SS-Screws.jpeg'
import TelescopicChannels from './Images/telescopicChannel.jpeg'
import HydraulicHinges from './Images/Hydraulic_Hinge.jpg'
import BedFittings from './Images/bedFittings.jpeg'

const products = [
  {
    id: 1,
    name: 'LED Panels',
    image: ledPanel,
    description: 'Energy-efficient LED panels designed for a wide range of applications, providing uniform lighting and reduced energy costs. Perfect for commercial and residential spaces.',
  },
  {
    id: 2,
    name: 'Wires and Cables',
    image: wiresAndCables,
    description: 'High-quality wires and cables suitable for electrical installations, ensuring reliable performance and safety. Available in various sizes and specifications to meet diverse needs.',
  },
  {
    id: 3,
    name: 'Strip Light',
    image: stripLight,
    description: 'Flexible and versatile strip lights that can be used for both accent and ambient lighting. Ideal for home decoration, displays, and commercial settings.',
  },
  {
    id: 4,
    name: 'Fan',
    image: fan,
    description: 'Modern and stylish fans that provide efficient air circulation. Designed with energy-saving technology, ensuring comfort while reducing energy consumption.',
  },
  {
    id: 5,
    name: 'D-Link Cables',
    image: dLinkCable,
    description: 'Durable D-Link cables designed for high-speed data transfer and reliable connectivity. Ideal for networking solutions in both residential and commercial environments.',
  },
  {
    id: 6,
    name: 'D-Link RJ Connector',
    image: rjConnector,
    description: 'Premium D-Link RJ connectors that ensure a secure and stable connection for all your networking needs. Perfect for professional installations and home use.',
  },
  {
    id: 7,
    name: 'Flood Light',
    image: FloodLight,
    description: 'High-intensity flood lights perfect for outdoor use. Engineered for durability and performance, these lights provide broad illumination for security, events, and landscaping.',
  },
  {
    id: 8,
    name: 'Street Light',
    image: StreetLight,
    description: 'Smart street lighting solutions that enhance visibility and safety on roads. Designed with energy-efficient technology to reduce operational costs while providing superior lighting.',
  },
  {
    id: 9,
    name: 'LED Drivers',
    image: Drivers,
    description: 'Reliable LED drivers designed to provide stable power supply and ensure optimal performance of LED lighting systems. Compatible with a variety of LED fixtures and applications.',
  },
  {
    id: 10,
    name: 'MCB Box',
    image: McbBox,
    description: 'Safety-focused MCB boxes that protect electrical circuits from overloads and short circuits. Compact and robust, these boxes are essential for secure electrical installations.',
  },
  {
    id: 11,
    name: 'Cany Extension Board',
    image: Cany,
    description: 'Versatile extension boards equipped with multiple outlets and safety features. Ideal for home and office use, ensuring your devices stay powered and connected without hassle.',
  },
  {
    id: 12,
    name: 'LED Light Bulb',
    image: LEDLightBulb,
    description: 'Bright and long-lasting LED light bulbs that offer energy-efficient illumination. Suitable for residential, commercial, and industrial lighting solutions.',
  },
  {
    id:13,
    name:'MS and SS Screws',
    image:MSandSS,
    description:'High-quality MS (Mild Steel) and SS (Stainless Steel) screws, perfect for fastening needs in construction, furniture, and other industrial applications. These screws ensure strength and durability for long-lasting performance.',
  },
  {
    id:14,
    name:'Hydraulic Auto Hinges',
    image:HydraulicHinges,
    description:'Hydraulic hinges designed for smooth and noiseless door operation. These hinges ensure soft closing, making them ideal for kitchen cabinets, wardrobes, and other furniture.',
  },
  {
    id:15,
    name:'Telescopic Channels',
    image:TelescopicChannels,
    description:'Heavy-duty telescopic channels that provide smooth drawer operation. These channels are built to withstand frequent use and ensure stability in various types of furniture.',
  },
  {
    id:16,
    name:'Bed Fittings',
    image:BedFittings,
    description:'Durable and high-quality bed fittings designed to ensure stability and support. Perfect for assembling and securing beds in both residential and commercial settings.',
  }
];

export default function Products() {
  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            {/* <button className="product-button">View Details</button> */}
          </div>
        ))}
      </div>
      <div className="product-contact">
        <p>For any product inquiry or more information, contact:</p>
        <p>Email: mahalaxmidistributors07@gmail.com</p>
        <p>Phone: +91 9768739622</p>
      </div>
    </div>
  );
}
