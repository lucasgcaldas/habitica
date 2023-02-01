import coins from '../../../website/common/script/ops/coins';
import i18n from '../../../website/common/script/i18n';
import { generateUser } from '../../helpers/common.helper';
import { BadRequest } from '../../../website/common/script/libs/errors';

describe('shared.ops.coins', () => {
    
    const req = { language: 'en' };
    
    it('returns 175.5 when type is gold and quantity 3', () => {
        let user = generateUser();
        user.balance = 200;
        expect(coins(user, 'gold', 3, req)).to.equal(175.5)
    });

    it('returns 168 when type is silver and quantity 4', () => {
        let user = generateUser();
        user.balance = 200;
        expect(coins(user, 'silver', 4, req)).to.equal(168)
    });
    
    it('throws exeption when type is bronze, quantity 7 and balance < 80', () => {
        try {
            let user = generateUser();
            user.balance = 200;
            coins(user, 'silver', 4, req)
        } catch (err) {
            expect(err).to.be.an.instanceof(BadRequest);
            expect(err.message).to.equal(i18n.t('invalidCoinType'));
        }
    });
});