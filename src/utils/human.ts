import { AuditWorkIssueSeverity } from '../../scripts/build/works'

export function prettySeverityName(s: AuditWorkIssueSeverity) {
  switch (s) {
    case 'C':
      return 'Crit'
    case 'H':
      return 'High'
    case 'M':
      return 'Med'
    case 'L':
      return 'Low'
    case 'I':
      return 'Info'
    case 'G':
      return 'Gas'
    case 'Q':
      return 'CQ'
  }
}
