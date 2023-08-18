import {
  generateColor,
  generateData,
  generateId,
  generateInt,
  generateNumber,
} from './app.worker';

describe('generateColor', () => {
  it('should return a valid color string', () => {
    const color = generateColor();
    expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
  });
});

describe('generateId', () => {
  it('should return a unique ID string', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });
});

describe('generateInt', () => {
  it('should return a random integer between 0 and 999', () => {
    const int = generateInt();
    expect(int).toBeGreaterThanOrEqual(0);
    expect(int).toBeLessThan(1000);
  });
});

describe('generateNumber', () => {
  it('should return a random number with 18 decimal places', () => {
    const number = generateNumber();
    expect(number.split('.')[1]).toMatch(/^[0-9]{18}$/);
  });
});

describe('generateData', () => {
  it('should return an array of elements with the specified length', () => {
    const dataArray = generateData();
    expect(dataArray.length).toBe(100);
  });
});
