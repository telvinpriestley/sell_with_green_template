import React from 'react'

export default function Alert({mes, level}) {
  return (
    <div className={`alert alert-${level} alert-dismissible fade show`} role="alert">
    <strong>Holy guacamole!</strong> {mes}.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}
