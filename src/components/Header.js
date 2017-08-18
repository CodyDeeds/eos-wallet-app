import React, { Component } from 'react';
import { User } from '../containers';
import Icon from './Icon';

class Header extends Component {
 static defaultProps = {
   className: 'header row no-gutters items-center space-between',
   styles: {
     icon: 'thumbnail',
   },
 }

 render() {
   const { className, styles } = this.props;

   return (
     <header className={className}>
       <div>
         <Icon className={styles.icon} />
         <img
           alt=""
           className="logo"
           src="images/logo.svg"
         />
       </div>
       <User />
     </header>
   );
 }
}

export default Header;
