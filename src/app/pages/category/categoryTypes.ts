export type category = {
    ncategory_id: number,
    scategory_name: string,
    intime: string,
    uptime: string,
    status: boolean
}
export type categoryQuery = {
    list:category[];
}