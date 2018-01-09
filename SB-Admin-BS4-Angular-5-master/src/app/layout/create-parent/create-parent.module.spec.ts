import { CreateParentModule } from './create-parent.module';

describe('CreateParentModule', () => {
    let createParentModule: CreateParentModule;

    beforeEach(() => {
       createParentModule = new CreateParentModule();
    });

    it('should create an instance', () => {
        expect(createParentModule).toBeTruthy();
    });
});
