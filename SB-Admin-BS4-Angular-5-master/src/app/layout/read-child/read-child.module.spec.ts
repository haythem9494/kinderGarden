import { ReadChildModule } from './read-child.module';

describe('TablesModule', () => {
  let readChildModule: ReadChildModule;

  beforeEach(() => {
    readChildModule = new ReadChildModule();
  });

  it('should create an instance', () => {
    expect(readChildModule).toBeTruthy();
  });
});
