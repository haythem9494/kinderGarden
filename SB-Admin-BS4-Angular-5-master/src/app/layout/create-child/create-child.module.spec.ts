import { CreateChildModule } from './create-child.module';

describe('CreateChildModule', () => {
    let createChildModule: CreateChildModule;

    beforeEach(() => {
        createChildModule = new CreateChildModule();
    });

    it('should create an instance', () => {
        expect(createChildModule).toBeTruthy();
    });
});
