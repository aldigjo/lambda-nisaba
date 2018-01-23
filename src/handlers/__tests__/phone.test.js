const PhoneHandler = require('../phone');

describe('PhoneHandler', () => {

    let sut;
    let attestationMgr={ attest: jest.fn()};
    let fuelTokenMgrMock={ verifyToken: jest.fn(), decode: jest.fn()};

    beforeAll(() => {
        sut = new PhoneHandler(attestationMgr,fuelTokenMgrMock);
    });

    test('empty constructor', () => {
        expect(sut).not.toBeUndefined();
    });

    test('handle null body', done => {
        sut.handle(null,(err,res)=>{
            expect(err).not.toBeNull()
            expect(err.code).toEqual(400)
            expect(err.message).toEqual('no body')
            done();
        })
    });

    test('handle empty token', done => {
        sut.handle({},(err,res)=>{
            expect(err).not.toBeNull()
            expect(err.code).toEqual(400)
            expect(err.message).toEqual('no fuelToken provided')
            done();
        })
    })



});