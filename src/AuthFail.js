import React from 'react'

function AuthFail() {
  return (
    <>
     
        
    <div class="err">
<h1>403</h1>
<h2>FORBIDDEN</h2>
<p>Access to this resource on the server is denied!</p>
<svg class="keyhole">
<use href="#keyhole"/>
</svg>
</div>

<svg class="key">
<use href="#key"/>
</svg>


<div class="ghost">
<svg class="ghost">
<use href="#ghost"/>
</svg>
</div></>

  )
}

export default AuthFail