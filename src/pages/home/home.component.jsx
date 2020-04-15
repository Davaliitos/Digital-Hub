import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectAccountBalance} from '../../redux/balance/balance.selectors';

import MenuCard from '../../components/menu-item/menu-item.component';
import CustomTable from '../../components/custom-table/custom-table.component';
import CustomTableRow from '../../components/custom-table-row/custom-table-row.component';
import CustomTableCell from '../../components/custom-table-cell/custom-table-cell.component'

import './home.style.scss'

const Home = ({currentUser, accountsBalance}) => (
    <div className="homepage">
        <h2>Welcome to your online banking {currentUser}</h2>
        <div className="home-menu">
            <MenuCard
                title="Transactions History"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium nunc et commodo varius. Nam pellentesque quam a est eleifend pharetra. Aliquam quis euismod sapien, nec porttitor ipsum. Aliquam ut consectetur neque, congue vehicula turpis. Praesent nisi justo, semper in nisi et, cursus pellentesque massa. Aliquam tristique, lectus vel hendrerit molestie, massa nisi efficitur nibh, porta dignissim turpis nunc ac elit. Pellentesque feugiat, dui ac vulputate vestibulum, urna orci semper sem, nec sollicitudin nunc dolor quis ex. Duis pretium vulputate tristique. In mattis metus nibh, sed blandit mi vulputate ut. Aliquam finibus tellus tortor, vitae fermentum mi dictum ac."
            >
            
            </MenuCard>
            <MenuCard
                title="Main Expenses"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium nunc et commodo varius. Nam pellentesque quam a est eleifend pharetra. Aliquam quis euismod sapien, nec porttitor ipsum. Aliquam ut consectetur neque, congue vehicula turpis. Praesent nisi justo, semper in nisi et, cursus pellentesque massa. Aliquam tristique, lectus vel hendrerit molestie, massa nisi efficitur nibh, porta dignissim turpis nunc ac elit. Pellentesque feugiat, dui ac vulputate vestibulum, urna orci semper sem, nec sollicitudin nunc dolor quis ex. Duis pretium vulputate tristique. In mattis metus nibh, sed blandit mi vulputate ut. Aliquam finibus tellus tortor, vitae fermentum mi dictum ac."
            >
                <img alt="shoes" src="https://i.ibb.co/GCCdy8t/womens.png"/>
            </MenuCard>
            <MenuCard>
                <CustomTable>
                    <CustomTableRow>
                        <CustomTableCell>Account No.</CustomTableCell>
                        <CustomTableCell>Balance</CustomTableCell>
                        <CustomTableCell>Date of Latest Transfer</CustomTableCell>
                    </CustomTableRow>
                    {
                        accountsBalance.map(account => (
                        <CustomTableRow key={account.account}>
                            <CustomTableCell>{account.account}</CustomTableCell>
                            <CustomTableCell>{account.balance.currency}{account.balance.value}</CustomTableCell>
                            <CustomTableCell>Hoy</CustomTableCell>
                        </CustomTableRow>
                        ))
                    }
                </CustomTable>
            </MenuCard>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    accountsBalance : selectAccountBalance
  })

export default connect(mapStateToProps)(Home);