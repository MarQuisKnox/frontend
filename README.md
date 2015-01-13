# Bountysource
[![Visit our IRC channel](https://kiwiirc.com/buttons/chat.freenode.net/Bountysource.png)](https://kiwiirc.com/client/chat.freenode.net:+6697/?nick=Bountyuser|?#Bountysource)

[![Bountysource](https://www.bountysource.com/badge/team?team_id=1&style=bounties_posted)](https://www.bountysource.com/teams/bountysource/bounties?utm_source=Bountysource&utm_medium=shield&utm_campaign=bounties_posted)

Please use our [issue tracker](https://github.com/bountysource/frontend/issues) to report any bugs or request new features.  Or, if you're a developer, send us a pull request!

## API: Staging vs. Production
We have two APIs available:
- https://api.bountysource.com/ - This is our production API and should be used for real transactions.  This is the API endpoint that powers www.bountysource.com.
- https://staging-api.bountysource.com/ - This is our test API and should be used for all testing purposes.  Our staging environment often contains code that hasn't been fully tested.  Paypal and Google Wallet are in "sandbox" mode which means financial transactions aren't real.  User data has been anonymized (emails, passwords, etc).
