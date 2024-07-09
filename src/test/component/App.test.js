import React from 'react';
import { render, screen } from '@testing-library/react';
import {expect, jest, test} from '@jest/globals';
import App from '../component/App.tsx'

test('App renders correctly', () => {
    render(<App />);
  
    // ตรวจสอบว่าคอมโพเนนต์แสดงผลตามที่คาดหวัง
  });
