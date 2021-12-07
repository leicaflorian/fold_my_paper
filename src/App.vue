<template>
  <div>
    <div class="py-5 border-bottom">
      <div class="container">
        <h1 class="display-3">Fold my paper!</h1>
        <p class="lead">
          How many times can you fold a sheet of paper?<br />Experiments shows
          that any sheet of paper can me folded for maximum 7 times. This
          happens because the thickness of the paper becomes so hight that is
          impossibile to fold.
        </p>
        <p class="lead">
          This simple project show how much the thickness of the paper rises
          exponentially when folded and allow us to calculate what thickness we
          would have if we could fold it more than X times.
        </p>
        <p>
          <em
            >Someone even says that if we fold a sheet of paper for 45 times,
            its thickness would be so hight that would cover the distance from
            Earth to the Moon. Let's try it!
          </em>
        </p>
      </div>
    </div>

    <div class="py-5 border-bottom bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col">
            <FormInput
              label="Paper thickness"
              v-model="thickness"
              type="number"
            >
              <template v-slot:after>
                <select
                  class="form-select"
                  style="min-width: 140px; flex: 0"
                  v-model="unit"
                >
                  <option value="um">Micron</option>
                  <option value="mm">Millimeters</option>
                </select>
              </template>
            </FormInput>
          </div>
          <div class="col">
            <FormInput
              label="Folding times"
              v-model="foldingTimes"
              type="number"
            ></FormInput>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col col-md-8">
            <FormInput
              label="Final thickness"
              :model-value="
                formatNumber(finalThickness) + ' ' + finalThicknessUnit
              "
              readonly
            >
              <template v-slot:after>
                <div class="input-group-text">
                  {{ formatNumber(sheetsCount) }} sheets
                </div>
              </template>

              <template v-slot:message v-if="finalThicknessUnit === 'au'">
                <small>{{ formatNumber(finalThicknessKm) }} km</small>
              </template>
            </FormInput>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark text-light">
      <div class="py-5">
        <div class="container">
          <h2 class="mb-4">
            Let's see where can you arrive... maybe to the Moon!
          </h2>

          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="el in reachedDistances"
              :key="el.destination"
            >
              <strong>{{ el.destination }}</strong> - OK! ({{
                formatNumber(el.distance)
              }}
              km)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, watch, defineComponent, ref, Ref, ComputedRef } from "vue";
import FormInput from "./components/FormInput.vue";
import convert from "convert";

export default defineComponent({
  name: "App",
  components: { FormInput },
  setup() {
    const yearLight = 149600000;
    const thickness: Ref<number> = ref(80);
    const unit: Ref<"um" | "mm"> = ref("um");
    const foldingTimes: Ref<number> = ref(2);
    const distances = [
      { destination: "Moon", distance: 384400 },
      { destination: "Mars", distance: 78340000 },
      { destination: "Sun", distance: 147390321 },
      { destination: "Jupiter", distance: 628730000 },
      { destination: "Saturn", distance: 1275000000 },
      { destination: "Uranus", distance: 2723950000 },
      { destination: "Neptune", distance: 4351400000 },
    ];

    const sheetsCount: ComputedRef<number> = computed(() =>
      Array(foldingTimes.value)
        .fill(0)
        .reduce((acc) => acc * 2, 1)
    );

    const finalThicknessUnit = ref("");
    const finalThickness = ref(0);
    const finalThicknessKm = ref(0);

    watch([sheetsCount, thickness, unit], () => calcFinalThickness(), {
      immediate: true,
    });

    const reachedDistances = computed(() => {
      return distances.filter(
        (distance) => distance.distance <= finalThicknessKm.value
      );
    });

    function calcFinalThickness() {
      const totalThickness = sheetsCount.value * thickness.value;
      let result = totalThickness;

      if (unit.value == "um") {
        result = totalThickness / 1000;
      }

      result = +result.toFixed(2);

      finalThicknessKm.value = convert(result, "mm").to("km");

      const conversionResult: string = convert(result, "mm")
        .to("best", "metric")
        .toString();

      const conversionMatcher = conversionResult.match(/([\d.]+)(\w+)/);

      if (conversionMatcher && conversionMatcher.length === 3) {
        let conversionNumber = +conversionMatcher[1];
        let conversionUnit = conversionMatcher[2];

        // Bigger than AU (light year)
        if (conversionNumber > yearLight) {
          conversionUnit = "au";
          conversionNumber = conversionNumber / 149600000;
        }

        finalThicknessUnit.value = conversionUnit;
        finalThickness.value = conversionNumber;
      } else {
        finalThicknessUnit.value = "";
        finalThickness.value = 0;
      }
    }

    function formatNumber(value: number): string {
      return new Intl.NumberFormat(navigator.language, {
        maximumFractionDigits: 2,
      }).format(value);
    }

    return {
      thickness,
      unit,
      foldingTimes,
      finalThickness,
      finalThicknessUnit,
      finalThicknessKm,
      sheetsCount,
      formatNumber,
      reachedDistances,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
