import i18n from '../i18n';
import BadRequest from '../libs/errors';

export default function coins(user, type, quantity, req) {

    const { balance } = user;

    if (balance > 0) {
        if (type === 'gold' && balance >= 100) {

            return quantity * 45 * 1.3;

        } else if (type === 'silver' && balance >= 90) {

            return quantity * 35 * 1.2;

        } else if (type === 'bronze' && balance >= 80) {

            return quantity * 25 * 1.1;

        } else {

            throw new BadRequest(i18n.t('invalidCoinType', req.language));

        }
    } else {

        throw new BadRequest(i18n.t('insufficientFunds', req.language));

    }
}
