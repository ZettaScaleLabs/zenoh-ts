<template>
  <NumberOptionSelect
    :model-value="modelValue"
    :disabled="disabled ?? false"
    :options="options"
    label="Accept Replies"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import type { ReplyKeyExpr } from '@eclipse-zenoh/zenoh-ts'
import type { OptionItem } from '../composables/zenohDemo/safeUtils'
import NumberOptionSelect from './NumberOptionSelect.vue'

interface Props {
  modelValue: ReplyKeyExpr | undefined
  disabled?: boolean
  options: OptionItem[]
}

interface Emits {
  (e: 'update:modelValue', value: ReplyKeyExpr | undefined): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>
