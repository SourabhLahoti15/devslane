import React, { useContext } from 'react'
import AlertContext from './AlertContext';
import UserContext from './UserContext';
import CartContext from './CartContext';

function withProvider(provider) {
    function hoc(IncomingComponent) {
        function OutgoingComponent(props) {
            const contextValue = useContext(provider);
            return <IncomingComponent {...props} {...contextValue} />;
        }
        return OutgoingComponent;
    }
    return hoc;
}
export default withProvider;

export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext);
export const withCart = withProvider(CartContext);