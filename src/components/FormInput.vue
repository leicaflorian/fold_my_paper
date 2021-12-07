<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>

    <div class="input-group">
      <input
        :type="type"
        class="form-control"
        :value="modelValue"
        :min="minValue"
        :readonly="readonly"
        @input="onInput"
      />

      <slot name="after"></slot>
    </div>

    <div class="ms-3">
      <slot name="message" class=""></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

export default defineComponent({
  name: "FormInput",
  props: {
    label: String,
    modelValue: [String, Number],
    type: {
      type: String as PropType<"text" | "number">,
      default: "text",
    },
    minValue: {
      default: 0,
      type: Number,
    },
    readonly: Boolean as PropType<boolean>,
  },
  setup(props, { emit }) {
    function onInput(e: Event) {
      let value: string | number = (e.currentTarget as HTMLInputElement).value;

      if (props.type === "number") {
        value = +value;
      }

      emit("update:modelValue", value);
    }

    return {
      onInput,
    };
  },
});
</script>
