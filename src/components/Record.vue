<template>
  <div class="record">
    <div class="wrap-result">
      <div class="result-image">
        <img
          v-if="record.isbns"
          :alt="'Cover for ' + record.title"
          :src="'https://covers.openlibrary.org/b/isbn/' + record.isbns[0] + '-S.jpg'"
        />
      </div>
      <h3 class="result-title">
        <span class="sr">Title: </span>
        <a
          class="bento-link"
          data-type="Title"
          :href="record.source_link"
          >{{ record.title }}</a
        >
      </h3>
    </div>
    <div class="result-uniform-title"></div>
    <p>
      <span class="result-type">
        <span class="sr">Type: </span> {{ record.content_type }}
      </span>
      <span class="result-year"
        >Published {{ record.publication_date }}</span
      >
    </p>
    <div class="result-body">
      <p
        class="result-authors"
        v-for="author in record.contributors"
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
          v-for="sub in record.subjects"
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
        v-for="loc in record.summary_holdings"
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
        :href="record.source_link"
        >Details and requests</a
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "Record",
    props: ['record'],
    setup({ record }) {
      return record;
    }
  }
</script>
