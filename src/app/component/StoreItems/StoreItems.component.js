/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './StoreItems.style';

class StoreSwitcher extends PureComponent {
    static propTypes = {
        item: PropTypes.object.isRequired,
        getStoreCode: PropTypes.func.isRequired
    };

    render() {
        const {
            item: { label },
            getStoreCode
        } = this.props;

        return (
            <button
              block="StoreItems"
              elem="Item"
              onClick={ getStoreCode }
            >
                { label }
            </button>
        );
    }
}

export default StoreSwitcher;
