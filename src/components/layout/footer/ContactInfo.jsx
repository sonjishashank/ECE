import React from 'react';
import { contactInfo } from '../../../utils/constants';

export function ContactInfo() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      {contactInfo.map((info, index) => (
        <p key={index}>{info}</p>
      ))}
    </div>
  );
}