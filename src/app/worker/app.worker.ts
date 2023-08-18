import BigNumber from 'bignumber.js';
import { Element, WorkerUpdateData } from '@interfaces';

let timerId: ReturnType<typeof setInterval> | null = null;
let interval = 10;
let arrayLength = 100;

export const generateColor = (): string => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + color.padStart(6, '0');
};

export const generateId = (): string =>
  String(Math.floor(Math.random() * 1000));

export const generateInt = (): number => Math.floor(Math.random() * 1000);

export const generateNumber = (): string => {
  const randomFloat = Math.random().toFixed(18);
  const randomInt = (Math.random() * 1000).toFixed(0);
  const bigDecimal = new BigNumber(randomInt + randomFloat);
  return bigDecimal.toString();
};

export const generateData = () => {
  const dataArray: Element[] = [];

  for (let i = 0; i < arrayLength; i++) {
    const data: Element = {
      id: generateId(),
      int: generateInt(),
      float: generateNumber(),
      color: generateColor(),
      child: {
        id: generateId(),
        color: generateColor(),
      },
    };

    dataArray.push(data);
  }

  return dataArray;
};

export const sendData = () => {
  self.postMessage(generateData());
};

export const startTimer = (): void => {
  sendData();
  timerId = setInterval(sendData, interval);
};

export const stopTimer = (): void => {
  if (timerId) {
    clearInterval(timerId);
  }
};

export const updateData = (event: MessageEvent<WorkerUpdateData>): void => {
  const { timerInterval, dataArraySize } = event.data;

  interval = timerInterval;
  arrayLength = dataArraySize;

  stopTimer();
  startTimer();
};

const handleUnload = () => {
  stopTimer();
  self.removeEventListener('message', updateData);
  self.removeEventListener('beforeunload', handleUnload);
};

self.addEventListener('message', updateData);
self.addEventListener('beforeunload', handleUnload);
