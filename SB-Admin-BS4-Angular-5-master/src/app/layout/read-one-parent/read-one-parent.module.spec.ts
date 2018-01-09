import { ReadOneParentModule } from './read-one-parent.module';

describe('TablesModule', () => {
  let readOneParentModule: ReadOneParentModule;

  beforeEach(() => {
    readOneParentModule = new ReadOneParentModule();
  });

  it('should create an instance', () => {
    expect(readOneParentModule).toBeTruthy();
  });
});
