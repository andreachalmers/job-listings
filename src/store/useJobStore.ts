import { create } from 'zustand'

interface JobStore {
  filters: string[]
  addFilter: (filter: string) => void
  removeFilter: (filter: string) => void
  clearFilters: () => void
}

export const useJobStore = create<JobStore>((set) => ({
  filters: [],
  addFilter: (filter) => set((state) => {
    if (state.filters.includes(filter)) return state
    return { filters: [...state.filters, filter] }
  }),
  removeFilter: (filter) => set((state) => ({
    filters: state.filters.filter(f => f !== filter)
  })),
  clearFilters: () => set({ filters: [] })
}))

