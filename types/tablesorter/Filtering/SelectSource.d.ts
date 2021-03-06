/**
 * Represents a filter-source.
 */
export interface SelectSource {
    /**
     * The display-name of the filter source.
     */
    text: string;

    /**
     * The filter-value.
     */
    value?: string | undefined;

    /**
     * Classes to add to the dropdown-entries.
     */
    "data-class"?: string | undefined;
}
