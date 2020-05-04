<template>
  <div id="app" class="container mt-5">
    <h1>Discovery!</h1>
    <!-- <form class="form-horizontal b-search"> -->
    <div class="form-group">
      <label for="b-search-main" class="field-label"
        >Search the MIT Libraries</label
      >
      <input
        id="b-search-main"
        type="search"
        class="field field-text b-search-input"
        name="q"
        placeholder="Enter your search"
        value=""
        v-model.lazy="term"
      />
      <div class="b-search-submit">
        <button type="submit" class="btn button-primary">
          Search
        </button>
      </div>
    </div>
    <div v-if="results!=null">
      <div class="gridband layout-2c">
        <div
          id="box-books_content"
          class="wrap-results grid-item region"
          data-region="Books and media"
        >
          <h2 class="title">Books and media</h2>
          <p class="results-desc">
            Books, ebooks, audio books, music, and videos at MIT.

            <a
              class="wc-link"
              href="https://mit.on.worldcat.org/search?queryString=popcorn"
              >Expand search to libraries around the world</a
            >
          </p>
          <div
            id="books_content"
            class="books_content"
            v-for="item in results.results"
            v-bind:key="item.id"
          >
            <div class="wrap-result">
              <div class="result-image">
                <img
                  v-if="item.isbns"
                  :alt="'Cover for ' + item.title"
                  :src="'https://covers.openlibrary.org/b/isbn/' + item.isbns[0] + '-S.jpg'"
                />
              </div>
              <h3 class="result-title">
                <span class="sr">Title: </span>
                <a
                  class="bento-link"
                  data-type="Title"
                  :href="item.source_link"
                  >{{ item.title }}</a
                >
              </h3>
            </div>
            <div class="result-uniform-title"></div>
            <p>
              <span class="result-type">
                <span class="sr">Type: </span> {{ item.content_type }}
              </span>
              <span class="result-year"
                >Published {{ item.publication_date }}</span
              >
            </p>
            <div class="result-body">
              <p
                class="result-authors"
                v-for="author in item.contributors"
                v-bind:key="author.id"
              >
                <span class="sr">Authors: </span>
                <span class="result-author">
                  {{ author.value }}
                </span>
              </p>
              <div class="result-subjectheadings">
                <span class="sr">Subjects: </span>
                <ul
                  class="list-subjects"
                  v-for="sub in item.subjects"
                  v-bind:key="sub.id"
                >
                  <li class="result-subjectheading">
                    {{ sub }}
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="stale_locations_MIT01001739356"
              class="result-local-locations"
            >
              <p class="sr">Library locations:</p>
              <ul
                class="list-local-locations"
                v-for="loc in item.summary_holdings"
                v-bind:key="loc.id"
              >
                <li class="result-local-location">
                  {{ loc.location}} {{ loc.collection }} {{
                  loc.call_number }} {{ loc.format }}
                </li>
              </ul>
            </div>

            <div class="result-get">
              <a
                class="details button button-secondary"
                data-type="Detail"
                :href="item.source_link"
                >Details and requests</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="about-bento bit" role="complementary">
        <h3 class="title">About this search app</h3>
        <p>
          Quick search at the MIT Libraries can be used to find books,
          movies, music, articles, journals, archives and manuscript
          collections, and other great stuff we have at the library.

          <a href="https://libraries.mit.edu/about-quick-search/"
            >Learn more</a
          >
        </p>
        <p>
          Not finding what you need?

          <a href="https://libraries.mit.edu/ask/">Ask us</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",
    data: function() {
      return {
        results: null,
        term: null
      };
    },
    watch: {
      term: function() {
        fetch(`https://timdex.mit.edu/api/v1/search?q=${this.term}`)
          .then(response => response.json())
          .then(data => {
            this.results = data;
          });
      }
    }
  };
</script>
