1. duplicate_allof_branches
2. Remove redundant type when enum present,same for const
3. Suggest const/enum instead of “boolean/ null singleton”
4. Replace type:"boolean" + const:true pattern
5. Flag keywords that equal their default values
6. Strip keywords that don’t apply to the instance type (draft-specific) (	drop_non_*_keywords_*)
7. Warn when lower-bounds are missing but implied by others
8. Convert type:["string","number"] to anyOf for draft 2020-12
9. Require list uniqueness inside required