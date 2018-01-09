import { ReadParentModule } from './read-parent.module';

describe('TablesModule', () => {
  let readParentModule: ReadParentModule;

  beforeEach(() => {
    readParentModule = new ReadParentModule();
  });

  it('should create an instance', () => {
    expect(readParentModule).toBeTruthy();
  });
});
