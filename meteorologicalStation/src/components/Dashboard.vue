<template>
    <div class="container">
    
        <div class="row d-flex align-items-stretch" style="font-family: sans-serif;">

          <div class="col-md-4" style="font-family: sans-serif; margin-bottom:3.5%;">
          
            <div class="card shadow clickable-card" >
              <div class="card-body text-center">
                <div class="row">
                  <div class="col-md-6">               
                    <!--i class="fas fa-tint" style="font-size:40px;"></i-->
                    <img src="../../../../humidity.png" alt="Responsive image" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                    <h2 v-if="this.$store.state.humidity === undefined" class="card-title text-primary">- %</h2>
                    <h2 v-else class="card-title text-primary">{{this.$store.state.humidity*100}} %</h2>
                    <div class="text-muted">Humidity</div>
                  </div>
                </div>
              </div>
             </div>

            </div>            
            
            
          <div class="col-md-4" style="font-family: sans-serif;margin-bottom:3.5%;">
          
            <div class="card shadow clickable-card" >
              <div class="card-body text-center">
                <div class="row">
                  <div class="col-md-6">
                    <!--i class="fas fa-umbrella" style="font-size:40px;"></i-->
                    <img src="../../../../rain.png" alt="Responsive image" class="img-fluid">

                  </div>
                    <div class="col-md-6">

			<div v-if="this.$store.state.rain === undefined">
	                   <h2 class="card-title text-primary">-</h2>
			</div>

			<div v-else>
	                   <h2 v-if="this.$store.state.rain === 1" class="card-title text-primary">Yes</h2>
	                   <h2 v-else class="card-title text-primary">No</h2>
			</div>

                        <div class="text-muted">Raining</div>
                  </div>
                </div>
              </div>
             </div>

            </div>           
            
            
            
          <div class="col-md-4" style="font-family: sans-serif;margin-bottom:3.5%;">
          
            <div class="card shadow clickable-card" >
              <div class="card-body text-center">
                <div class="row">
                  <div class="col-md-6">
                    <!--i class="fas fa-thermometer-half" style="font-size:40px;"></i-->
                    <img src="../../../../temperature.png" alt="Responsive image" class="img-fluid">

                  </div>
                  <div class="col-md-6">
                    <h2 v-if="this.$store.state.temperature === undefined" class="card-title text-primary"> - °C</h2>
                    <h2 v-else class="card-title text-primary">{{this.$store.state.temperature}} °C</h2>
                    <div class="text-muted">Temperature</div>
                    </div>
                </div>
              </div>
             </div>

            </div>
        
        </div> 
    
    
    
        <div class="row d-flex align-items-stretch" style="font-family: sans-serif;">
        
          <div class="col-md-4" style="font-family: sans-serif;">
          
            <div class="card shadow clickable-card" >
              <div class="card-body text-center">
                <div class="row">
                  <div class="col-md-6">
                    <img src="../../../../wind_speed.png" alt="Responsive image" class="img-fluid">
                  </div>
                  <div class="col-md-6" style="display: flex; align-items: center; flex-wrap: wrap;">
                    <h2 v-if="this.$store.state.wind===undefined" class="card-title text-primary">- km/h</h2>
                    <h2 v-else class="card-title text-primary">{{this.$store.state.wind}} km/h</h2>
                    <div class="text-muted">Wind Speed</div>
                  </div>
                </div>
              </div>
             </div>

            </div>   
            
            
          <div class="col-md-4" style="font-family: sans-serif;">
          
            <div class="card shadow clickable-card" >
              <div class="card-body text-center">
                <div class="row">
                  <div class="col-md-6">
                    <!--i class="fas fa-weight" style="font-size:40px;"></i-->
                    <img src="../../../../pressure.png" alt="Responsive image" class="img-fluid">
                </div>
                    <div class="col-md-6" style="display: flex; align-items: center; flex-wrap: wrap;">
                    <h2 v-if="this.$store.state.pressure===undefined" class="card-title text-primary"> - hPa</h2>
                    <h2 v-else class="card-title text-primary">{{this.$store.state.pressure/100}} hPa</h2>
                    <div class="text-muted">Pressure</div>
                  </div>
                </div>
              </div>
             </div>

            </div>    
            
            
          <div class="col-md-4" style="font-family: sans-serif;">
          
            <div class="card shadow clickable-card" >
              <div class="card-body text-center">
                <div class="row">
                  <div class="col-md-6">
                    <!--i class="fas fa-sun" style="font-size:40px;"></i-->
                    <img src="../../../../sun.png" alt="Responsive image" class="img-fluid">
                    
                    </div>
                    <div class="col-md-6">
                    <h2 v-if="this.$store.state.uvintensity===undefined" class="card-title text-primary">-<h3 class="card-title text-primary">mW/cm2</h3></h2>
		    <h2 v-else class="card-title text-primary">{{this.$store.state.uvintensity}} <h3 class="card-title text-primary">mW/cm2</h3></h2>
                    <div class="text-muted">UV Intensity</div>
                  </div>
                </div>
              </div>
             </div>

            </div>    
        </div>

    </div>
</template>

<script>

    export default {

	mounted(){
	    this.$store.dispatch('showDataStreamView');
	    this.$store.dispatch('fetchDataStreamsState');
	}
  
    }


</script>

<style scoped>


</style>
