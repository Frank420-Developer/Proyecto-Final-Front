export interface HeaderModel {
    TITLE: string,
    TEXT_PLACEHOLDER: string,
    TEXT_ADD_BUTTON: string,
    FLAG_ACTIVE_SEARCH: boolean,
    FLAG_ACTIVE_BUTTON: boolean,
    COMPONENT_DIALOG: any,
    WIDTH_DIALOG?: string,
}

export interface SecondHeaderModel {
    TITLE: string;
    COLUMN_ONE: ColumnDetailModel;
    COLUMN_TWO: ColumnDetailModel;
    COLUMN_THREE?: ColumnDetailModel;
    COLUMN_FOUR?: ColumnDetailModel;
    ACTIVE_ALL_COLUMNS: boolean;
    ACTIVE_COLUMN_FOUR: boolean;
    PREVIOUS_PAGE: string;
}


interface ColumnDetailModel{
    TITLE: string;
    DESCRIPTION?: string;
}