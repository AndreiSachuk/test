import { IdChangerByIndexPipe } from './id-changer-by-index.pipe';

describe('IdChangerByIndexPipe', () => {
  let pipe: IdChangerByIndexPipe;

  beforeEach(() => {
    pipe = new IdChangerByIndexPipe();
  });

  it('should return the unchanged value if changes array is null', () => {
    const value = '123';
    const i = 0;
    const changes = null;

    const result = pipe.transform(value, i, changes);

    expect(result).toBe(value);
  });

  it('should return the unchanged value if the index is out of range of changes array', () => {
    const value = '123';
    const i = 2;
    const changes = ['456', '789'];

    const result = pipe.transform(value, i, changes);

    expect(result).toBe(value);
  });

  it('should return the changed value at the specified index', () => {
    const value = '123';
    const i = 1;
    const changes = ['456', '789'];

    const result = pipe.transform(value, i, changes);

    expect(result).toBe(changes[i]);
  });

  it('should return the unchanged value if changes array has fewer elements than the index', () => {
    const value = '123';
    const i = 2;
    const changes = ['456'];

    const result = pipe.transform(value, i, changes);

    expect(result).toBe(value);
  });
});
