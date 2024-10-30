type MaybeString = string | undefined | null;

export function isNotEmpty(term: MaybeString): term is string {
  const isEmpty = ["", undefined, null].includes(term);

  return !isEmpty;
}

export function isEmpty(term: MaybeString): term is undefined | null | "" {
  const isEmpty = ["", undefined, null].includes(term);

  return isEmpty;
}

export const filterRecords = ({
  fields,
  records,
  term,
}: {
  fields: string[];
  records: any[];
  term: string;
}) => {
  if (isEmpty(term)) {
    return records;
  }

  return records.filter((record) => {
    return fields.some((field) => {
      const value = record[field];

      return value.toLowerCase().includes(term.toLowerCase());
    });
  });
};
