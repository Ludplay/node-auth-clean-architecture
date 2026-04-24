const getUserInteractor = require('../../../src/interactors/users/get-user.bs');
const sinon = require('sinon');
const { expect } = require('chai');
const { fail } = require('should');

describe('GetUserInteractor', () => {
    let userRepository;    
    let interactor;

    let userId = 1;
    const expectedUser = { id: userId, name: 'John Doe', email: 'john.doe@example.com' };   
    
    beforeEach(() => {
        userRepository = {
            getUser: sinon.stub()
        };
        
        interactor = new getUserInteractor({ userRepository });
    });

    afterEach(() => {
        sinon.restore();
    });


    it('should get user by ID', async () => {        
        userRepository
            .getUser
            .withArgs(userId)
            .resolves(expectedUser);

        
        const response = await interactor.execute(userId);

        expect(response).to.be.equal(expectedUser);

        expect(userRepository.getUser.calledOnce).to.be.true;        
    });

    it('should return null if user not found', async () => {

        userRepository
            .getUser
            .resolves(null);

        const response = await interactor.execute(userId);

        expect(response).to.be.an('null');
    });
    

    it('should fail', async () => {

        userRepository
            .getUser
            .rejects();

        try {
            const response = await interactor.execute(userId);
            fail();
        } catch (error) {
            expect(error).to.be.an('error');
        }
        

        expect(userRepository.getUser.calledOnce).to.be.true;
    });
});

