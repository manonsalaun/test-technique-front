const formatDate = (date: string): string => {
    const releaseDate = new Date(date);
    return releaseDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export default formatDate;