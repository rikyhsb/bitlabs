<template>
  <div class="c-wrapper">
    <div class="c-body">
      <main class="c-main">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="col-12">
                    <form v-on:submit.prevent="fetchAllData()">
                      <div class="row">
                        <div class="form-group col-md-4">
                          <input type="text" v-model="q" class="form-control">
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6">
                          <button type="submit" class="btn btn-sm btn-success">
                            <i class="fa fa-search"></i> Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                    <div class="row">
                      <div class="col-12">
                        <div class="text-center">
                          <img :src="imgUrl" />
                          <h2>{{ weather.main.temp }} &deg;</h2>
                          <h3><i class="fa fa-map-marker"></i> {{ weather.name }}</h3>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 text-center">
                        <h4><i class="fa fa-thermometer-quarter"></i> {{ weather.main.temp_min }} &deg;</h4>
                      </div>
                      <div class="col-6 text-center">
                        <h4>{{ weather.weather[0].main }}</h4>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 text-center">
                        <h4><i class="fa fa-thermometer-quarter"></i> {{ weather.main.temp_max }} &deg;</h4>
                      </div>
                      <div class="col-6 text-center">
                        <h4><i class="fa fa-map-marker"></i> {{ weather.sys.country }}</h4>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import service from './services.js'

export default {
  data: function() {
    return {
      q: 'bandung',
      weather: {},
      imgUrl: ''
    }
  },
  mounted() {
    this.fetchAllData();
  },
  methods: {
    fetchAllData() {
      service
        .fetchData(this.$apiUrl + '&units=metric&q=' + this.q)
        .then((res) => {
          this.weather = res;
          this.imgUrl = 'https://openweathermap.org/img/w/'+ this.weather.weather[0].icon +'.png';
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>