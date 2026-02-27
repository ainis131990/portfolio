

## Plan

### 1. Add a 5th project to `src/data/projects.ts`
- Import an unused asset (e.g., `nypl-bird.jpg`) for the 5th project
- Add a new project entry (e.g., "Project Five" — need a name from you, or I'll use a placeholder title)

### 2. Update Archive filtering in `src/pages/ProjectIndex.tsx`
- Change the Archive filter logic to show **all projects** (same as Selected work) instead of filtering by "illustration" tag
- When Archive is selected, render a **3-column grid** layout instead of the current 2-column masonry
- Mobile: 2-column grid (same as now)
- Desktop: 3-column grid with consistent card sizing

### Files changed
- `src/data/projects.ts` — add 5th project entry + import
- `src/pages/ProjectIndex.tsx` — add conditional 3-column grid rendering for Archive tab

