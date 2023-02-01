import i18n from '../i18n';
import BadRequest from '../libs/errors';

export default function coins(user, type, quantity, req) {
    const { balance } = user;
    const coinValues = {
        gold: { value: 45, multiplier: 1.3, minBalance: 100 },
        silver: { value: 35, multiplier: 1.2, minBalance: 90 },
        bronze: { value: 25, multiplier: 1.1, minBalance: 80 },
    };

    if (balance <= 0 || balance < coin.minBalance) {
        throw new BadRequest(i18n.t('insufficientFunds', req.language));
    }

    const coin = coinValues[type];
    if (!coin) {
        throw new BadRequest(i18n.t('invalidCoinType', req.language));
    }

    return quantity * coin.value * coin.multiplier;
}
