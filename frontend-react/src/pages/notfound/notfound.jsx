import { useState } from "react"

export default function NotFound() {
  const [search, setsearch] = useState("")

  return (
    <div class="row mx-auto my-4 text-center gy-4">
      <div class="col-lg-6 col-sm-6 ">
        <div class="page-content"> "
          Go back to the <a href="/"><b>homepage</b></a>  and see if you can find what you need from there."
          <br />Perhaps searching can help.</div>
      </div>
      <div class="col-sm-5 ">

        <form method="POST" action="#" class="d-flex" role="search">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
                <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
              </svg>
            </span>
            <input value={search} type="search" class="form-control me-2" placeholder="Search" aria-label="Search promt" aria-describedby="basic-addon1" />
          </div>

        </form>
      </div>
      <div>
        <img src="/src/assets/img/404.jpeg" alt="404" />
        <p> <b>Error404:PageNotFound</b> The page you're looking for doesn't exist on our website.</p>
      </div>
    </div>
  )
}
