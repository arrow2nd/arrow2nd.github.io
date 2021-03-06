import { Button } from 'semantic-ui-react'
import * as Styles from './account-links.module.css'
import * as React from 'react'
import accountLinks from '../../data/common/account-links'

const AccountLinks = () => {
  const buttons = accountLinks.map((e) => (
    <Button
      key={e.icon}
      circular
      color={e.color}
      icon={e.icon}
      href={e.href}
      target="_blank"
      rel="noopener"
    />
  ))

  return <div className={Styles.links}>{buttons}</div>
}

export default AccountLinks
