<template>
  <div v-if="record.source == 'MIT ArchivesSpace'" class="wrap-results">
    <div class="wrap-result">
      <div class="result-image">
        <img
          v-if="record.isbns"
          :alt="'Cover for ' + record.title"
          :src="
            'https://covers.openlibrary.org/b/isbn/' +
            record.isbns[0] +
            '-S.jpg'
          "
        />
      </div>
      <h3 class="result-title">
        <span class="sr">Title: </span>
        <a class="bento-link" data-type="Title" :href="record.source_link">{{
          record.title
        }}</a>
      </h3>
    </div>
    <p>
      <span class="result-type">
        <span class="sr">Type: </span> {{ record.content_type }}
      </span>
      <span class="result-year">Published {{ record.publication_date }}</span>
    </p>
    <div class="result-body">
      <span class="sr">Authors: </span>
      <div
        class="result-authors"
        v-for="author in record.contributors"
        :key="author.id"
      >
        <p class="result-author">
          {{ author.value }}
        </p>
      </div>
      <div class="result-subjectheadings">
        <span class="sr">Subjects: </span>
        <ul class="list-subjects" v-for="sub in record.subjects" :key="sub.id">
          <li class="result-subjectheading">
            {{ sub }}
          </li>
        </ul>
      </div>
    </div>
    <div id="stale_locations_MIT01001739356" class="result-local-locations">
      <p class="sr">Library locations:</p>
      <ul
        class="list-local-locations"
        v-for="loc in record.summary_holdings"
        :key="loc.id"
      >
        <li class="result-local-location">
          {{ loc.location }} {{ loc.collection }} {{ loc.call_number }}
          {{ loc.format }}
        </li>
      </ul>
    </div>

    <div class="result-get">
      <a
        class="details button button-secondary"
        data-type="Detail"
        :href="record.source_link"
        >Details and requests</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Record",
  props: ["record"]
};
</script>

<style>
ol,
ul {
  padding-left: 2.5rem;
}

li > ul,
li > ol {
  margin-top: 0.5rem;
}
.wrap-results {
  margin-top: 2rem;
  margin-bottom: 3rem;
  background-color: #fff;
  box-shadow: 0 0 3px 1px rgba(89, 89, 89, 0.3);
  padding: 15px;
  border-top: 3px solid #000;
}

.wrap-results .title {
  margin-bottom: 0.1em;
  font-size: 2.6rem;
}

.wrap-results .results-desc {
  font-size: 1.3rem;
  color: #595959;
}

.wrap-results .wc-link {
  display: block;
}

.wrap-results .advsearch-desc {
  font-size: 1.3rem;
  color: #595959;
  margin: 1rem 0 0 0;
}
</style>

<link rel="stylesheet" src="../assets/mit.css" />
